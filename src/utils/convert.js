const ConvertToTxt = (fileList) => {

    fileList.forEach((file) => {
        const reader = new FileReader()

        reader.onload = (e) => {
            const csvData = e.target.result

            const rows = csvData.split('\n')

			const txtContent = rows.map(row => {
				const cols = row.split(',')
				const reversed = cols.reverse()
				return reversed.join(',')
			}).join('\n')

			const blob = new Blob([txtContent], { type: 'text/plain' })
			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = file.name.replace('.csv', '.txt')
			a.click()
			URL.revokeObjectURL(url)
		}

		reader.readAsText(file)
	})
}

export default ConvertToTxt

