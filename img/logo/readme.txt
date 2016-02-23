source images:
polimi.png  http://datashack.deib.polimi.it/

logo-polimi.png 
logo-polimi.svg
http://www.grep.it/downloads.php


*
    margin: 0
    padding: 0
    overflow: hidden

body
    font-family: Arial, Helvetica, sans-serif

h1
    color: white
    size: 16

h2
    color: white
    size: 14

h3
    color: white
    size: 12

h4
    color: white
    size: 10

h5
    color: white
    size: 8

.hide
    display none

.outer-container
    display: flex
    flex-direction: column
    height: 100vh
    width: 100vw

    header,footer
        padding: 5px 0px
        background: #493D26
        color: #7D773D

    header
        display: flex
        flex-flow: row wrap
        align-items: center
        align-content: space-around

        .logo
            img
                height: 78px
                width: 80px
                color: white

        .texto
            width: 150px
            color: white
            vertical-align: middle


        .title
            border: black
            lex-grow: 20

        .menu
            width: 50px
            flex-direction: column
            justify-content: flex-end
            align-self: flex-end
            background: gray

            a
                text-decoration: none
                display: block
                padding: 1em
                color: white

            a:hover
                background: darken(deepskyblue, 2%)


    footer
        padding: 5px

    .body
        display: flex
        flex-grow: 1
        background: pink


        .nav
            background: lightblue
            width: 200px

        .map
            background: honeydew
            flex-grow: 1
