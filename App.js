import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [symptom, setSymptom] = useState('');
  const [result, setResult] = useState(null);

  const diagnoseFault = () => {
    if (!symptom.trim()) {
      setResult('يرجى كتابة وصف المشكلة أو رمز العطل (مثل P0300).');
      return;
    }
    
    const query = symptom.toLowerCase();
    if (query.includes('p0300') || query.includes('تفتفة') || query.includes('ميسفاير')) {
      setResult('النتيجة: احتراق غير منتظم في المحرك (Misfire).\nالأسباب المحتملة: البواجي (شمعات الإحتراق)، الكويلات، أو انسداد البخاخات.');
    } else if (query.includes('حرارة') || query.includes('ارتفاع الحرارة')) {
      setResult('النتيجة: ارتفاع حرارة المحرك.\nالأسباب المحتملة: نقص ماء الرديتر، عطل الثرموستات، أو عطل مروحة التبريد.');
    } else if (query.includes('فرامل') || query.includes('صوت بالبريك')) {
      setResult('النتيجة: مشكلة في نظام الفرامل.\nالأسباب المحتملة: تآكل الفحمات (القماشات) أو حاجة الديسكات للهراط.');
    } else {
      setResult(`جاري تحليل العطل: "${symptom}"\nيوصى بفحص السيارة بجهاز فحص الأعطال OBD2 للتحقق الدقيق.`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Auto-Master AI</Text>
      <Text style={styles.subtitle}>تطبيق تشخيص أعطال السيارات</Text>
      
      <TextInput
        style={styles.input}
        placeholder="اكتب رمز العطل أو المشكلة هنا..."
        value={symptom}
        onChangeText={setSymptom}
      />
      
      <TouchableOpacity style={styles.button} onPress={diagnoseFault}>
        <Text style={styles.buttonText}>تشخيص العطل</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    marginBottom: 15,
    textAlign: 'right',
  },
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    width: '100%',
  },
  resultText: {
    fontSize: 16,
    color: '#0f172a',
    textAlign: 'right',
    lineHeight: 24,
  },
});
                
