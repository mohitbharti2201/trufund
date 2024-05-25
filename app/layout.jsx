import "@/styles/globals.css"
// import Provider from '@components/Provider'
import Nav from "@/components/Nav"

export const metadata = {
    title: 'TruFund',
    description: 'Fund the true cause'
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            {/* <Provider> */}
                <div className='main'>
                    <div className='gradient' />
                </div>            

                <main className='app w-[150vw] h-full'>
                    <Nav />
                    {children}
                </main>
            {/* </Provider> */}
        </body>
    </html>
  )
}

export default RootLayout