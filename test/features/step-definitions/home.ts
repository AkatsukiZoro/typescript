import {Given, When, Then} from '@wdio/cucumber-framework'
import { expect } from "chai"

Given(/^I open the browser and load the url (.+)$/, async function (homeurl){
    browser.pause(10000)
    await browser.url(homeurl)
    await browser.maximizeWindow()
});

Then(/^I click login button/,async () => {
    browser.pause(10000)
    const login_btn = await $('[name="login"]')
    await login_btn.click()
});

When(/^I enter username (.+) and  password (.+)$/, async function (username, password){
    browser.pause(5000)
   await (await $('[name="username"]')).setValue(username)
   await (await $('[name="password"]')).setValue(password)
});

When(/^I select location (.+) and hotels (.+)$/, async function (location, hotel){
    const user = await $('#username_show')
    const userValue = await ((await user.getValue()).replace("Hello ","").replace("!",""))
    expect(userValue).to.equal("AkatsukiZoro")
    browser.pause(5000)
    const Location = await $('#location')
    const Hotel = await $('#hotels')
    await Location.selectByAttribute('value', location)
    await Hotel.selectByAttribute('value', hotel)
});

When(/^I select number of rooms (.+)$/, async function (no_of_rooms){
    browser.pause(5000)
    const rooms = await $('#room_nos')
    if(no_of_rooms == "one" )
        no_of_rooms="1"
    await rooms.selectByAttribute('value', no_of_rooms)
    let location = rooms.getLocation('x')
    console.log(location)
});

When(/^I take screenshot of the browser/, async () => {
    await browser.saveScreenshot("test/features/screenshots/screenshots.png")
});
