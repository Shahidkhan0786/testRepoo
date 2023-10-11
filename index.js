import inquirer from "inquirer";
async function showPrompt() {
    const ans = await inquirer.prompt([
        {
            type: "list",
            name: "selected",
            message: "hiii",
            choices: ["a", "b"],
        },
    ]);
    console.log(ans);
}
