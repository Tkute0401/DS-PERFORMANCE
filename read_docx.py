import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text(path):
    try:
        doc = zipfile.ZipFile(path)
        xml_content = doc.read('word/document.xml')
        doc.close()
        tree = ET.XML(xml_content)
        
        words = []
        for node in tree.iter():
            if node.tag.endswith('}t') and node.text:
                words.append(node.text)
        return ''.join(words)
    except Exception as e:
        return str(e)

print('--- SARVITAL ---')
print(extract_text('case studies/Sarvital_Case_Study.docx')[:2000])
print('\n--- FINANTHROPIST ---')
print(extract_text('case studies/Finanthropist_Case_Study.docx')[:2000])
