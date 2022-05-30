import { Link } from 'solito/link'

export const Landing = () => {
    return (
        <>
            <div>Landing</div>
            <Link href="/sign-in">
                <div>Sign in</div>
            </Link>
            <Link href="/sign-up">
                <div>Sign up</div>
            </Link>
        </>
    )
};