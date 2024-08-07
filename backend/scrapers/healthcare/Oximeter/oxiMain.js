import axios from 'axios';
import { load } from 'cheerio';
import { Device } from './models/Device.js';


const scrapeAndSave = async () => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);

    // Collect data
    const name = 'Pulse Oximeter'; // Example name, you may need to scrape this as well

    const overview = [];
    const specifications = [];
    const features = [];
    const useCases = [];

    // Scrape all <p> tags within the specific <div> with class 'css-1i3umih'
    $('div.css-1i3umih p').each((index, element) => {
      overview.push($(element).text());
    });
    console.log(data)

    // Add additional logic to scrape specifications, features, and use cases
    // This is a placeholder and should be adjusted according to actual content and HTML structure
    $('div.specifications p').each((index, element) => {
      specifications.push($(element).text());
    });

    $('div.features p').each((index, element) => {
      features.push($(element).text());
    });

    $('div.use-cases p').each((index, element) => {
      useCases.push($(element).text());
    });

    const data = {
      name,
      overview,
      specifications,
      features,
      useCases,
    };

    // Saving the data into the database
    const device = new Device(data);
    await device.save();
    console.log('Data saved successfully:', data);
  } catch (error) {
    console.error('Error during scraping or saving data:', error);
  }
};

const start = async () => {
  await scrapeAndSave();
};

start();
