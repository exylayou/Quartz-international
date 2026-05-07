const fs = require('fs');
const https = require('https');

const queries = [
    "Silestone Miami Vena slab texture",
    "Silestone Pietra slab texture",
    "Silestone Yukon slab texture",
    "Silestone Miami White slab texture",
    "Silestone Halcyon slab texture"
];

async function fetchImage(query) {
    const searchUrl = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`;
    
    return new Promise((resolve, reject) => {
        https.get(searchUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/murl&quot;:&quot;(https:\/\/[^&"]+\.jpg)&quot;/i);
                if (match && match[1]) {
                    resolve(match[1]);
                } else {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

async function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        https.get(url, {
             headers: {
                'User-Agent': 'Mozilla/5.0'
             }
        }, (res) => {
             if (res.statusCode === 301 || res.statusCode === 302) {
                  return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
             }
             if (res.statusCode !== 200) {
                 return resolve(false);
             }
             const file = fs.createWriteStream(filename);
             res.pipe(file);
             file.on('finish', () => {
                 file.close();
                 resolve(true);
             });
        }).on('error', reject);
    });
}

async function main() {
    if (!fs.existsSync('src/assets/images')) {
        fs.mkdirSync('src/assets/images', { recursive: true });
    }
    
    for (const query of queries) {
        console.log(`Searching for ${query}...`);
        const url = await fetchImage(query);
        if (url) {
            console.log(`Found URL: ${url}`);
            const name = query.replace('Silestone ', '').replace(' slab texture', '').toLowerCase().replace(/ /g, '-');
            const filename = `src/assets/images/silestone-${name}-slab.jpg`;
            const success = await downloadImage(url, filename);
            if (success) {
                console.log(`Downloaded ${filename}`);
            } else {
                console.log(`Failed to download ${filename}`);
            }
        } else {
            console.log(`No image found for ${query}`);
        }
    }
}

main().catch(console.error);
