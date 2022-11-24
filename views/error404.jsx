const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/colorful-parrot.jpg" alt="Colorful parrot"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@miklevasilyev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikhail Vasilyey</a>
                         on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404