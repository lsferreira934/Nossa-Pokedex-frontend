function getInputs(inputs, startValues = {}) {
    const sendValues = { ...startValues };
    if (Array.isArray(inputs)) {
        inputs.forEach((input) => {
            const element = document.querySelector(input);
            sendValues[input.replace('#', '')] = element.value;
        })
    } else {
        const element = document.querySelector(inputs);
        sendValues[inputs.replace('#', '')] = element.value;
    };

    return sendValues;
}