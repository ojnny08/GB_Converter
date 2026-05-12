import React, { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import ConvertToTxt from '../../utils/convert'
import './Dropzone.css'

const Dropzone = (props) => {
	const { required, name, files, setFiles } = props
	const hiddenInputRef = useRef(null)
	
	const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
		onDrop: (incomingFiles) => {
			setFiles(prev => [...prev, ...incomingFiles])

			if (hiddenInputRef.current) {
				const dataTransfer = new DataTransfer()
				incomingFiles.forEach((file) => dataTransfer.items.add(file))
				hiddenInputRef.current.files = dataTransfer.files
			}
		}
	})

	const handleDelete = (fileToDelete) => {
		setFiles(prev => prev.filter(file => file.name !== fileToDelete.name))
	}

	return (
		<div>
			<div {...getRootProps({ className: `drop-zone ${isDragActive ? 'active' : ''}` })}>
				<input type='file' name={name} required={required} style={{ opacity: 0 }} ref={hiddenInputRef} />
				<input {...getInputProps()} />
				<div className='icon-wrap'>⬆</div>
				<p className='drop-title'>Drag & drop files here</p>
				<p className='drop-sub'>or click to browse</p>
			</div>

			{files.length > 0 && (
				<ul className='file-list'>
					{files.map(file => (
						<li key={file.name} className='file-item'>
							<span className='file-name'>{file.name}</span>
							<span className='file-size'>{(file.size / 1024).toFixed(1)} KB</span>
							<button onClick={() => handleDelete(file)}>✕</button>
						</li>
					))}
				</ul>
			)}
            
		</div>
	)
}

export default Dropzone