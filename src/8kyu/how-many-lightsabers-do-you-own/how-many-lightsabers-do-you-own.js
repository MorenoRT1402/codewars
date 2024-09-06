const howManyLightsabersDoYouOwn = (name='anyone else') => {
    const lightsaberOwner = {
        name: 'Zach',
        amount: 18
    };
    return name === lightsaberOwner.name ? lightsaberOwner.amount : 0;
}

//#--------------------------------------------#

console.log(howManyLightsabersDoYouOwn());
console.log(howManyLightsabersDoYouOwn('Adam'));
console.log(howManyLightsabersDoYouOwn('Zach'));