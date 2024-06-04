
export const SetUpUI = (user) => {
    // getting login and logout buttons
    const logIn = document.querySelector(".Login");
    const logout = document.querySelector(".Logout");
    const dashboard = document.querySelector(".dashboard");

    //getting comments and reaction elements
    const usersOnly = document.querySelectorAll(".authenticated");

        if (user) {
            // setting login and logout visibility
            logIn.style.display = "none";
            logout.style.display = "block";
            dashboard.style.display = "block"

            //setting usersOnly visibility
            usersOnly.forEach(item => item.style.display = "block")
        } else {
            logIn.style.display = "block";
            logout.style.display = "none";
            dashboard.style.display = "none"
            usersOnly.forEach(item => item.style.display = "none")
            
        }

}

