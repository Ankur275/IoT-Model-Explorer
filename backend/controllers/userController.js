import {User} from '../Models/user.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError} from '../utils/apiError.js'
import { ApiResponse} from '../utils/apiResponse.js'

dotenv.config();

// console.log('Email:', process.env.EMAIL);
// console.log('Email Password:', process.env.EMAIL_PASSWORD);

// Transporter for nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Generate JWT Token
const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        console.log(userId);
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        console.log(`Access Token: ${accessToken}`);
        console.log(`Refresh Token: ${refreshToken}`);
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        console.log("error in genrating token: ",error);
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

// User Signup
export const signup = asyncHandler( async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new ApiError(409, "User with email or username already exists")
        }

        const user = new User({ username, email, password });
        await user.save();

        // res.status(201).json({ token });
        return res.status(201).json(new ApiResponse(201,{},"User Registered Successfully"))
    } catch (error) {
        // res.status(500).json({ message: error.message });
        // throw new ApiError(500,error?.message)
        next(error)
    }
})

// User Login
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    // console.log(req.body);
    if (!password && !email) {
        throw new ApiError(400, "Email and password is required")
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(404, "User not found")
        }
        console.log(user)
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new ApiError(400,{},"Invalid email or password")
        }
        // console.log(isMatch);
        const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)
        // console.log(accessToken,refreshToken);
        

        const options = {
            httpOnly: true,
            secure: true
        }

        return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken, options).json(new ApiResponse(200,{},"User logged in successfully"));
    } catch (error) {
        // throw new  ApiError(500,error.message)
        next(error)
    }
})

// Reset Password Request
export const resetPasswordRequest = asyncHandler(async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            // return res.status(400).json({ message: 'User not found' });
            throw new ApiError(400,'User not found')
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetUrl = `http://localhost:5173/api/users/resetPassword/${resetToken}`;

        const mailOptions = {
            to: user.email,
            from: process.env.EMAIL,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                ${resetUrl}\n\n
                If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };

        await transporter.sendMail(mailOptions);

        // console.log('Reset token generated and saved:', resetToken); // Log the reset token

        // res.status(200).json({ message: 'Reset password link sent' });
        return res.status(200).json(new ApiResponse(200,{},'Reset password link sent'))
    } catch (error) {
        // console.error('Error occurred during reset password request:', error);
        // res.status(500).json({ message: error.message, stack: error.stack });
        // throw new ApiError(500,error?.message,error?.stack)
        next(error)
    }
})

// Reset Password
export const resetPassword = asyncHandler(async (req, res, next) => {
    const { resetToken } = req.params;
    const { newPassword } = req.body;

    try {
        // console.log('Reset token received:', resetToken); // Log the received reset token

        const user = await User.findOne({
            resetPasswordToken: resetToken,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            // console.log('Token not found or expired'); // Log token not found or expired
            // return res.status(400).json({ message: 'Invalid or expired token' });
            throw new ApiError(400,"Invalid or expired token")
        }

        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        // console.log('Password has been reset for user:', user.email); // Log the user email whose password was reset

        // res.status(200).json({ message: 'Password has been reset' });
        return res.status(200).json(new ApiResponse(200,{},"Password has been reset"))
    } catch (error) {
        // console.error('Error occurred during password reset:', error);
        // res.status(500).json({ message: error.message, stack: error.stack });
        // throw new ApiError(500,error?.message)
        next(error)
    }
})

// User Logout
export const logout = asyncHandler(async (req, res, next) => {
    try {
        const userId = req.user._id;

        // Find the user by ID and invalidate the refresh token
        const user = await User.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        user.refreshToken = null; // Invalidate the refresh token
        await user.save({ validateBeforeSave: false });

        // Clear the cookies on the client side
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');

        return res.status(200).json(new ApiResponse(200, {}, "User logged out successfully"));
    } catch (error) {
        next(error);
    }
});