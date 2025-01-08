import { useState } from "react";

export function useToast() {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")

    return {
        setShowErrorToast, setShowSuccessToast, title, setTitle, body, setBody, showSuccessToast, showErrorToast
    }
}