import { MyContextProvider } from '../path/to/MyContext';
import '../styles/globals.css';
import { AuthProvider } from './@core/Context/AuthContext';
import { SocketProvider } from './@core/Context/SocketContext';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <SocketProvider>
                <UserProvider>
                    <MyContextProvider>
                        <Component {...pageProps} />
                    </MyContextProvider>
                </UserProvider>
            </SocketProvider>
        </AuthProvider>
    );
}

export default MyApp;
