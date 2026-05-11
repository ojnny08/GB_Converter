import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
//import { formatFile } from '../../utils/fixedFormat'

const UploadFile = () => {

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const text = reader.result
        //formatFile(text)
      }
      reader.readAsText(file)
    })
    
  }, [])
  const {getRootProps, getInputProps, isDragActive, is} = useDropzone({onDrop, accept: { 'text/csv': ['.csv'] } })

  return (
    <div className={`drop-container ${isDragActive ? 'drop-active' : ''}`} {...getRootProps()}>
        <input {...getInputProps()} />
        <span style={{ fontSize: '32px' }}>⬆</span>
        <h3>Drop your CSV here, or click to browse</h3>
        <p>Supports .csv files</p>
    </div>
  )
}

export default UploadFile;