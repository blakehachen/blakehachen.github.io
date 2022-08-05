export default function projList() {
  const list = [
    {
      title: "portfolio-site",
      content:
        "This is a link to the source code of the website you are currently viewing. You can see all the dependencies that are included and all code written. Some dependencies may no longer be in use.",
      languages: ["JavaScript", "React"],
      languageColors: ["cyan", "teal"],
      link: "https://github.com/blakehachen/blakehachen.github.io/tree/master",
    },
    {
      title: "crypto-trade-bot",
      content:
        "The crypto trade bot is a program that lets users create custom trading strategies to back test and run in various supported markets. On a dry run the bot will trade on the ticker supplied in the config file and watch RSI and Bollinger bands for price predictions. Users can access backtest functionality through PgAdmin.",

      languages: ["Python", "Express js"],
      languageColors: ["yellow", "red"],
      link: "https://github.com/blakehachen/crypto-trade-bot",
    },

    {
      title: "space-rush",
      content:
        "A game where the player is a ship defending space from a barrage of asteroids. The game has a total of three levels, in order for the player to succeed they must complete all three levels before their health hits zero.",
      languages: ["C#", "XNA Framework"],
      languageColors: ["green", "purple"],
      link: "https://github.com/blakehachen/game-proj-0",
    },
    {
      title: "cowboy-cafe",
      content:
        "This project is a mock point of sale system coupled with an item menu app. The user can take orders, after an order is taken the user is prompted to give the customer change based on register coin counts. The menu app gives customers the ability to search menu items by name, calorie count and price.",
      languages: ["C#", "Razor Pages"],
      languageColors: ["green", "blue"],
      link: "https://github.com/blakehachen/cowboy-cafe",
    },
    {
      title: "rust-solutions",
      content:
        "This is a guided project in order to better understand CLI applications in rust. Currently, I have rewritten GNU/BSD: cat, wc, head and echo. Most inspiration from this project comes from Command Line Programming in Rust by Ken Youens-Clark.",
      languages: ["Rust"],
      languageColors: ["orange"],
      link: "https://github.com/blakehachen/rust-solutions",
    },
  ];
  return list;
}
