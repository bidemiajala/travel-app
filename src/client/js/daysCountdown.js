const daysCountdown = (futureDate) => {
    const difference = new Date(futureDate) - new Date();
    const length = new Date(difference);
    let daysLeft = length / (1000 * 60 * 60 * 24);
    daysLeft = Number(Math.round(daysLeft));
    return daysLeft;
};
export { daysCountdown };
