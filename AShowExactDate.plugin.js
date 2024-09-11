/**
 * @name AShowExactDate
 * @author Mshl_Louis
 * @description Displays the exact time when a message was written to the second
 * @version 4.2.0
 */

module.exports = meta => {

    const mySettings = { buttonText: "Click me!", darkMode: true };

    return {
        start: () => {
            Object.assign(mySettings, BdApi.Data.load(meta.name, "settings"));

            setInterval(function () {
                let allMessages = document.querySelectorAll(".scrollerInner_e2e187 li");

                allMessages.forEach(message => {
                  
                    let timeElement = message.querySelector('time');

                    if (timeElement) {              
                        let dateTimeValue = timeElement.getAttribute('datetime');
                        let date = new Date(dateTimeValue);

                        let formattedDate =
                            String(date.getDate()).padStart(2, '0') + '.' +
                            String(date.getMonth() + 1).padStart(2, '0') + '.' +
                            date.getFullYear() + ' ' +
                            String(date.getHours()).padStart(2, '0') + ':' +
                            String(date.getMinutes()).padStart(2, '0') + ':' +
                            String(date.getSeconds()).padStart(2, '0');

                        let separatorElement = timeElement.querySelector('i.separator_f9f2ca');

                        timeElement.textContent = formattedDate;

                        if (separatorElement) {
                            timeElement.appendChild(separatorElement);
                        }
                    }
                });
            }, 1000);
        },
        stop: () => {
            
        },
        getSettingsPanel: () => {
            
        }
    }
};