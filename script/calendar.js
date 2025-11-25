//calendar function
function getDay(date) {
    return date.getDay(); 
}

let currentDate = new Date();

//Events
    function HalloweenEventCalendar() {
    var Calendar = document.querySelector("td[data-date=\"2025-10-31\"]");
        if (!Calendar) return;

    var Header = document.createElement("h4");
    var HeaderText = document.createTextNode("Spooky Costume Party!");


    var Event = document.createElement("div");
    Event.setAttribute("class", "event");
    Event.dataset.title = "Spooky Costume Party!"
    Event.dataset.description = "Get ready for a night of Halloween thrills at our Spooky Costume Party! Come dressed to impress in your most creative, spooky, or bookish costume. The best outfits of the night will win a surprise mystery book prize, so bring your A-game! Enjoy snacks, decorations, and a fun atmosphere perfect for Halloween lovers."

    Header.appendChild(HeaderText);
    Event.appendChild(Header);
    
    Calendar.appendChild(Event);
    }

    function christmasGiftEventCalendar() {
    var Calendar = document.querySelector("td[data-date=\"2025-12-23\"]");
        if (!Calendar) return;

    var Header = document.createElement("h4");
    var HeaderText = document.createTextNode("Christmas Gift Exhange!");



    var Event = document.createElement("div");
    Event.setAttribute("class", "event");
    Event.dataset.title = "Christmas Gift Exhange!"
     Event.dataset.description = "Celebrate the Christmas season with our Christmas Gift Exchange. Join us for an evening filled with delicious food, holidays games, and cheerful company. Party guest can participate in a secret book exchange, making this the perfect event for readers who love sharing and receiving stories. Bring any wrapped book to swap and have an open mind to your new mystery book.";

    
    Header.appendChild(HeaderText);
    Event.appendChild(Header);
    
    Calendar.appendChild(Event);
    }

    function christmasEventCalendar() {
    var Calendar = document.querySelector("td[data-date=\"2025-12-25\"]");
        if (!Calendar) return;

    var Header = document.createElement("h4");
    var HeaderText = document.createTextNode("Christmas!");


    var Event = document.createElement("div");
    Event.setAttribute("class", "event");
    Event.dataset.title = "Christmas!"
    Event.dataset.description = "Quill & Ink will be closed for the Christmas holiday as we spend time with friends and family. We are so grateful for your support throughout the year. We hope your holiday season is filled with joy, warmth, and good books. We will reopen on December 26, 2025, refreshed and ready to serve you again. Happy Holidays from everyone at Quill & Ink!"


    Header.appendChild(HeaderText);
    Event.appendChild(Header);
    
    Calendar.appendChild(Event);
    }

    function ThanksgivingEventCalendar() {
    var Calendar = document.querySelector("td[data-date=\"2025-11-27\"]");
        if (!Calendar) return;

    var Header = document.createElement("h4");
    var HeaderText = document.createTextNode("Thanksgiving!");

    var Event = document.createElement("div");
    Event.setAttribute("class", "event");
    Event.dataset.title = "Thanksgiving!"
    Event.dataset.description = "Quill & Ink will be closed on the day of Thanksgiving as we take time to celebrate gratitude and togetherness. We want to thank all of our readers and customers for being part of our community. We hope your holiday is full of delicious food, loved ones, and cozy reading time. We will reopen on November 28, 2025, ready to welcome you back. Happy Thanksgiving from all of us! "


    Header.appendChild(HeaderText);
    Event.appendChild(Header);
    
    Calendar.appendChild(Event);
    }

    function signingRobertsCalendar() {
    var Calendar = document.querySelector("td[data-date=\"2025-12-10\"]");
        if (!Calendar) return;

    var Header = document.createElement("h4");
    var HeaderText = document.createTextNode("Lauren Roberts - Book Signing");

    var Event = document.createElement("div");
    Event.setAttribute("class", "event inactive");
    Event.dataset.title = "Lauren Roberts - Book Signing"
    Event.dataset.description = "Meet Lauren Roberts, the bestselling author of Fearless, during her special book signing event at Quill & Ink. This is a wonderful opportunity to have your favorite books signed and chat with the author herself. Hear insights about her writing process, characters, and upcoming projects. The signing begins at 2 PM, so arrive early to secure your spot. "


    Header.appendChild(HeaderText);
    Event.appendChild(Header);
    Calendar.appendChild(Event);
    }

    function newSiteEventCalendar() {
    var Calendar = document.querySelector("td[data-date=\"2025-12-01\"]");
        if (!Calendar) return;

    var Header = document.createElement("h4");
    var HeaderText = document.createTextNode("New Website Launch!");

    var Event = document.createElement("div");
    Event.setAttribute("class", "event");
    Event.dataset.title = "New Website Launch!"
    Event.dataset.description = "We are thrilled to reveal the launch of our brand-new Quill & Ink website! The redesigned site features a fresh, modern look and improved navigation to make browsing and book discovery even more enjoyable. Readers can now explore upcoming events, new releases, and store information more easily than ever before. Our goal is to create a welcoming digital space for every book lover. Come celebrate with us! "

    Header.appendChild(HeaderText);
    Event.appendChild(Header);

    Calendar.appendChild(Event);
    }




    function signingSheridanEventCalendar() {
    var Calendar = document.querySelector('td[data-date="2025-11-21"]');
        if (!Calendar) return;
    
    var Header = document.createElement("h4");
    var HeaderText = document.createTextNode("Mia Sheridan - Book Signing");

    var Event = document.createElement("div");
    Event.setAttribute("class", "event");
    Event.dataset.title = "Mia Sheridan - Book Signing"
    Event.dataset.description = "Join us for an afternoon with Mia Sheridan, author of the beloved novel Archer\'s Voice. Fans will have the chance to meet the author, ask questions, and get their books signed. The event will take place at 123 Blvd, Orlando, Florida, beginning promptly at 12:00 PM. Don\'t miss this rare opportunity to connect with a celebrated storyteller."

    Header.appendChild(HeaderText);
    Event.appendChild(Header);

    Calendar.appendChild(Event);
    }



//Calendar

function eventCalendar(elem, year, month) {
    const mon = month - 1; 
    const date = new Date(year, mon, 1);
    const pad = n => (n < 10 ? "0" + n : n);

    let table = `
        <table>
        <caption><i class="fa-solid fa-arrow-left left-arrow"></i>${date.toLocaleString('default', { month: 'long' })} ${year}<i class="fa-solid fa-arrow-right right-arrow"></caption>
        <tr>
            <th>Sunday</th><th>Monday</th><th>Tuesday</th>
            <th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th>
        </tr><tr>
    `;

   
    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>';
    }

    while (date.getMonth() === mon) {
        var fullDate = `${year}-${pad(month)}-${pad(date.getDate())}`;
        table += `<td data-date="${fullDate}">${date.getDate()}</td>`;


        if (getDay(date) === 6 && new Date(year, mon, date.getDate() + 1).getMonth() === mon) {
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }


    if (getDay(new Date(year, mon + 1, 0)) !== 6) {
        for (let i = getDay(new Date(year, mon + 1, 0)) + 1; i <= 6; i++) {
            table += '<td></td>';
        }
    }


    table += '</tr></table>';

    elem.innerHTML = table;

    
    HalloweenEventCalendar();
    signingSheridanEventCalendar();
    christmasEventCalendar();
    ThanksgivingEventCalendar();
    newSiteEventCalendar();
    christmasGiftEventCalendar();
    signingRobertsCalendar();
    

    var leftArrow = document.querySelector(".left-arrow");
    var rightArrow = document.querySelector(".right-arrow");

    

        leftArrow.addEventListener('click', () => {
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
            eventCalendar(elem, currentDate.getFullYear(), currentDate.getMonth() + 1);
        });

        rightArrow.addEventListener('click', () => {
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
            eventCalendar(elem, currentDate.getFullYear(), currentDate.getMonth() + 1);
        });
    
    window.openEvent = (date) => {
            var selectedDate = document.getElementById('selected-date')
            var eventDetails = document.getElementById('event-details')
            

            selectedDate.textContent = `Selected date: ${date}`
            eventDetails.classList.toggle('inactive');
            eventDetails.classList.toggle('active');
        };



    elem.querySelectorAll("td[data-date]").forEach(td => {
        var eventDiv= td.querySelector('.event');
            if (!eventDiv) return;
            
            eventDiv.addEventListener('click', e => {
                e.stopPropagation();

                var eventDetails = document.getElementById('event-details');
                var title = document.getElementById('event-title');
                var description = document.getElementById('event-description');


                title.textContent = eventDiv.dataset.title;
                description.textContent = eventDiv.dataset.description;
                eventDetails.classList.toggle('inactive');
                eventDetails.classList.toggle('active');

                
            });
        var X = document.querySelector(".fa-x");

        X.addEventListener('click', () => {
            var eventDetails = document.getElementById('event-details');

            eventDetails.classList.add('inactive');
            eventDetails.classList.remove('active');
        })
    });
};



document.addEventListener("DOMContentLoaded", () => {
    var calendarSpace = document.getElementById("calendar-space");
    var today = new Date();

    eventCalendar(calendarSpace, today.getFullYear(), today.getMonth() + 1);
    
});

function checkEvent(event) {
    var selectedDate = document.getElementById('selected-date').textContent.replace('Selected date: ', '');
    

    var chosenDate = document.querySelector(`td[data-date="${selectedDate}"]`);


    var Des = document.createElement("p");
    var DesText = document.createTextNode(`${DesText}!`);

    var Event = document.createElement("div");
    Event.setAttribute("class", "event");

    Des.appendChild(DesText);
    Header.appendChild(HeaderText);
    Header.appendChild(Des);
    Event.appendChild(Header);
    
    chosenDate.appendChild(Event);
};


