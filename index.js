const scrape = require('website-scraper');

const websiteUrl = 'https://curriculum.choices.edu/classes/7621/units/2/parts/537?access_code=unBy91le&classId=2cf3577d-05ce-4898-9f58-5d928c0c0928&assignmentId=3cf8e896-5aa9-4bab-bab2-b039cc4538d6&submissionId=bab99ec7-e86a-363c-ee7b-58cc4e49d42e';

let options = {
    urls: [websiteUrl],
    directory: './node-homepage',
    // Enable recursive download
    recursive: true,
    // Follow only the links from the first page (index)
    // then the links from other pages won't be followed
    maxDepth: 20,
    urlFilter: function(url){
        
        // If url contains the domain of the website, then continue:
        // https://nodejs.org with https://nodejs.org/en/example.html
        if(url.indexOf(websiteUrl) === 0 || url.indexOf(cdnjs.cloudflare.com) === 0){
            console.log(`URL ${url} matches ${websiteUrl}`);
            return true;
        }
        
        return false;
    },
};

scrape(options).then((result) => {
    console.log("Webpages succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});