import ErrorToast from './error/errorToast'
import SuccessToast from './succuss/succussToast'

interface Toasts {
    showErrorToast: boolean,
    setShowErrorToast: (show: boolean) => void,
    showSuccessToast: boolean,
    setShowSuccessToast: (show: boolean) => void,
    title: string,
    body: string
}

export default function Toast({ showErrorToast, setShowErrorToast, showSuccessToast, setShowSuccessToast, title, body }: Toasts) {
    return (
        <>
            {showErrorToast && (
                <ErrorToast
                    title={title}
                    body={body}
                    duration={5000}
                    onClose={() => setShowErrorToast(false)}
                />
            )}
            {showSuccessToast && (
                <SuccessToast
                    title={title}
                    body={body}
                    duration={5000}
                    onClose={() => setShowSuccessToast(false)}
                />
            )}
        </>
    )
}
