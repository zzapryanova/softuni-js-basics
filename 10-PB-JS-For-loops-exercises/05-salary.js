function salary(input) {
    let openTabsCount = Number(input[0]);
    let salary = Number(input[1]);
    
    for (let i = 2; i < openTabsCount + 2; i++) {
        let currTab = input[i];
        if (salary > 0) {
            switch (currTab) {
                case "Facebook":
                    salary -= 150;
                    break;
                case "Instagram":
                    salary -= 100;
                    break;
                case "Reddit":
                    salary -= 50;
                    break;
            };
        } else {
            break;
        };
    };

    if (salary > 0) {
        console.log(Math.round(salary));
    } else {
        console.log("You have lost your salary.");
    };
}

// salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
// salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
// salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);

function salary2(input) {
    let openTabsCount = Number(input[0]);
    let salary = Number(input[1]);
    
    for (let i = 2; i < input.length; i++) {
        let currTab = input[i];
       
        switch (currTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
            };

        if (salary <= 0)  {
            console.log("You have lost your salary.");
            break;
        };
    };

    if (salary > 0) {
        console.log(Math.round(salary));
    };
}

// salary2(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
// salary2(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary2(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);