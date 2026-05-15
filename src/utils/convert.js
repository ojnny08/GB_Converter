const ConvertToTxt = (fileList) => {
    const promises = fileList.map((file) => {
        return new Promise((resolve) => {
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
                const name = file.name.replace('.csv', '.txt')

                // TODO: replace with real backend call — send file, receive converted blob + name
                resolve({ name, url, size: blob.size })
            }

            reader.readAsText(file)
        })
    })

    return Promise.all(promises)
}

export default ConvertToTxt
