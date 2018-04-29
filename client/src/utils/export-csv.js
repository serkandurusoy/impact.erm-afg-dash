import FileSaver from 'file-saver';
import { parse } from 'json2csv';

const exportCSV = (data, fileName) => {
  let content = '';

  if (Array.isArray(data)) {
    if (data.length > 0) {
      content = parse(data);
    } else {
      content += 'Data,Value\n';
    }
  } else {
    content += 'Data,Value\n';
    content += Object.entries(data)
      .map(([k, v]) => `${k},${v}`)
      .join('\n');
    content += '\n';
  }

  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });

  FileSaver.saveAs(blob, `${fileName}.csv`);
};

export default exportCSV;
