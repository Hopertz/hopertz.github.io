const main = () => {
    const codeStyle = document.getElementById("code-style")
    const themeToggle = document.getElementById("theme-toggle")

    const switchDark = () => codeStyle.href = "/css/zenburn.css"
    const switchLight = () => codeStyle.href = "/css/friendly.css"

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
        if (event.matches) {
            document.body.classList.add("dark")
            switchDark()
        } else {
            document.body.classList.remove("dark")
            switchLight()
        }
    })

    themeToggle.addEventListener("click", () => {
        if (document.body.className.includes("dark")) {
            switchDark()
        } else {
            switchLight()
        }
    })

    if (localStorage.getItem("pref-theme") === null) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark")
            switchDark();
        } else {
            document.body.classList.remove("dark")
            switchLight()
        }
    } else if (localStorage.getItem("pref-theme") === "dark") {
        document.body.classList.add("dark")
        switchDark()
    } else {
        document.body.classList.remove("dark")
        switchLight()
    }
}