import React from 'react'

function Footer(){

    var year = new Date().getFullYear()

    return(
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            Copyright &copy; {year} Dev Connector
        </footer>
    )
}
export default Footer;