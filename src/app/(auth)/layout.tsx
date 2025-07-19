import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <header>
                <h1>Authentication</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}
export default AuthLayout;