// =====================================================
// BABY BOSS INVITATION
// AZRIEL JADE C. TROGUE
// =====================================================


// =====================================================
// GOOGLE APPS SCRIPT URL
// =====================================================

const scriptURL =
    "https://script.google.com/macros/s/AKfycbz0e4faK6JSf6aKwkepaZFBI1dnL6tjrO959T4DVjURmr_k9tITp6AYCj-BjRMp74jejQ/exec";



// =====================================================
// OPEN INVITATION
// =====================================================

function scrollToInvitation() {

    const invitation =
        document.getElementById("invitation");


    if (invitation) {

        invitation.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}



// =====================================================
// COUNTDOWN TIMER
// =====================================================

// Azriel Jade C. Trogue
// 1st Birthday & Dedication Day
// October 21, 2026
// 3:00 PM
// Philippine Time (UTC +8)


const eventDate = new Date(

    "October 21, 2026 15:00:00 GMT+0800"

).getTime();



function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        eventDate - now;



    // Event has already started

    if (distance <= 0) {

        clearInterval(countdownInterval);


        const countdownElement =
            document.querySelector(".countdown");


        if (countdownElement) {

            countdownElement.innerHTML = `

                <h3>
                    🎉 The Mission Has Begun! 🎉
                </h3>

            `;

        }

        return;

    }



    // Calculate days

    const days =
        Math.floor(

            distance /

            (1000 * 60 * 60 * 24)

        );



    // Calculate hours

    const hours =
        Math.floor(

            (

                distance %

                (1000 * 60 * 60 * 24)

            )

            /

            (1000 * 60 * 60)

        );



    // Calculate minutes

    const minutes =
        Math.floor(

            (

                distance %

                (1000 * 60 * 60)

            )

            /

            (1000 * 60)

        );



    // Calculate seconds

    const seconds =
        Math.floor(

            (

                distance %

                (1000 * 60)

            )

            /

            1000

        );



    // Get countdown elements

    const daysElement =
        document.getElementById("days");


    const hoursElement =
        document.getElementById("hours");


    const minutesElement =
        document.getElementById("minutes");


    const secondsElement =
        document.getElementById("seconds");



    // Display days

    if (daysElement) {

        daysElement.innerText =

            String(days).padStart(

                2,

                "0"

            );

    }



    // Display hours

    if (hoursElement) {

        hoursElement.innerText =

            String(hours).padStart(

                2,

                "0"

            );

    }



    // Display minutes

    if (minutesElement) {

        minutesElement.innerText =

            String(minutes).padStart(

                2,

                "0"

            );

    }



    // Display seconds

    if (secondsElement) {

        secondsElement.innerText =

            String(seconds).padStart(

                2,

                "0"

            );

    }

}



// Run countdown immediately

updateCountdown();



// Update countdown every second

const countdownInterval =

    setInterval(

        updateCountdown,

        1000

    );





// =====================================================
// RSVP FORM
// GOOGLE SHEETS CONNECTION
// =====================================================


const rsvpForm =

    document.getElementById(

        "rsvpForm"

    );



const successMessage =

    document.getElementById(

        "successMessage"

    );



if (rsvpForm) {


    rsvpForm.addEventListener(

        "submit",

        async function(event) {


            // =================================================
            // STOP PAGE FROM REFRESHING
            // =================================================

            event.preventDefault();



            // =================================================
            // GET FULL NAME
            // =================================================

            const fullNameElement =

                document.getElementById(

                    "fullName"

                );



            const fullName =

                fullNameElement

                    ? fullNameElement.value.trim()

                    : "";



            // =================================================
            // GET SELECTED ATTENDANCE
            // =================================================

            const selectedAttendance =

                document.querySelector(

                    'input[name="attendance"]:checked'

                );



            // =================================================
            // GET OTHER ATTENDEES
            // =================================================

            const otherAttendeesElement =

                document.getElementById(

                    "otherAttendees"

                );



            const otherAttendees =

                otherAttendeesElement

                    ? otherAttendeesElement.value.trim()

                    : "";



            // =================================================
            // CHECK FULL NAME
            // =================================================

            if (!fullName) {

                alert(

                    "Please enter your full name."

                );

                return;

            }



            // =================================================
            // CHECK ATTENDANCE
            // =================================================

            if (!selectedAttendance) {

                alert(

                    "Please select whether you can attend."

                );

                return;

            }



            // =================================================
            // GET ATTENDANCE VALUE
            // =================================================

            const attendance =

                selectedAttendance.value;



            // =================================================
            // CREATE RSVP DATA
            // =================================================
            //
            // IMPORTANT:
            // The property is "fullName" because
            // Google Apps Script expects:
            //
            // data.fullName
            //
            // =================================================

            const rsvpData = {

                fullName:

                    fullName,


                attendance:

                    attendance,


                otherAttendees:

                    otherAttendees

            };



            // =================================================
            // FIND SUBMIT BUTTON
            // =================================================

            const submitButton =

                rsvpForm.querySelector(

                    ".submit-button"

                );



            // =================================================
            // CHANGE BUTTON TEXT
            // =================================================

            if (submitButton) {

                submitButton.innerText =

                    "Sending RSVP...";


                submitButton.disabled =

                    true;

            }



            // =================================================
            // SEND DATA TO GOOGLE SHEETS
            // =================================================

            try {


                await fetch(

                    scriptURL,

                    {

                        method: "POST",


                        mode: "no-cors",


                        headers: {

                            "Content-Type":

                                "text/plain;charset=utf-8"

                        },


                        body:

                            JSON.stringify(

                                rsvpData

                            )

                    }

                );



                // =================================================
                // HIDE RSVP FORM
                // =================================================

                rsvpForm.style.display =

                    "none";



                // =================================================
                // SHOW SUCCESS MESSAGE
                // =================================================

                if (successMessage) {

                    successMessage.style.display =

                        "block";


                    successMessage.scrollIntoView({

                        behavior: "smooth",


                        block: "center"

                    });

                }



            } catch (error) {


                // =================================================
                // ERROR HANDLING
                // =================================================

                console.error(

                    "RSVP Error:",

                    error

                );


                alert(

                    "Something went wrong. Please try again."

                );



                // Restore button

                if (submitButton) {

                    submitButton.innerText =

                        "Submit RSVP";


                    submitButton.disabled =

                        false;

                }

            }

        }

    );

}