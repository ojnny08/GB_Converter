import Dropzone from "../../components/UploadFile/Dropzone";
import ConvertToTxt from "../../utils/convert";
import { useState } from "react";
const Home = () => {  
    const [files, setFiles] = useState([])

    return (
		<form onSubmit={(e) => {
			e.preventDefault()
            ConvertToTxt(files)
			const formData = new FormData(e.currentTarget)
			const file = formData.get("my-file")
			console.log(file)
		}}>
			<Dropzone name="my-file" required files={files} setFiles={setFiles} />
			<button type="submit">Submit</button>
		</form>
	)
}

export default Home