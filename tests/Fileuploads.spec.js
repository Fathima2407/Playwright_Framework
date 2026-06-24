const {test, expect}=require('@playwright/test');
import path from 'path';

test('File Uploads',async({page})=>{
    // to upload any file, the type attribut must be file (type='files) and if we wanna upload multiple files, then smthg multiple should be written in the tag
    // await page.goto("https://testpages.eviltester.com/styled/file-upload-test.html");
    // const filepath=path.join(__dirname,'Uploads','One.txt'); // __dirname = present working file 
    // await page.setInputFiles("#fileinput",filepath);

    await page.goto("http://uitestingplayground.com/upload");

    const file1= path.join(__dirname, 'Uploads','One.txt');
    const file2= path.join(__dirname, 'Uploads','Two.txt');

    const frame = await page.frameLocator("iframe[src='/static/upload.html']");
    await frame.locator("#browse").waitFor({state :'attached'});

    await frame.locator("#browse").setInputFiles([file1,file2]);
    await page.waitForTimeout(3000);


})