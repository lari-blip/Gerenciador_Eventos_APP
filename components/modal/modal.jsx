
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';  
import styles from './styled'; // Im
import { useNavigation } from '@react-navigation/native'; 


const EventModal = ({ isOpen, onClose, onSave, eventData, setEventData }) => {
  const navigation = useNavigation(); 
  const [selectedEstado, setSelectedEstado] = useState(''); 
  const [selectedCidade, setSelectedCidade] = useState(''); 

  
  const currentEventData = eventData || {};

  
  useEffect(() => {
    if (!isOpen) {
      
      return;
    }
  }, [isOpen]);

  const estados = [
    { nome: 'São Paulo', cidades: ['São Paulo', 'Campinas', 'Santos'] },
    { nome: 'Minas Gerais', cidades: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'] },
    { nome: 'Rio de Janeiro', cidades: ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes'] },
  ];

  const handleInputChange = (name, value) => {
    setEventData({ ...eventData, [name]: value }); 
  };

  const handleSave = () => {
    if (!currentEventData.name || !currentEventData.date || !currentEventData.location || !currentEventData.image) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    console.log('Evento salvo:', currentEventData); 
    onSave(currentEventData); 
    onClose();
    navigation.navigate('EventList');
  };

  const handleEstadoSelect = (estado) => {
    setSelectedEstado(estado);
    setSelectedCidade(''); 
    handleInputChange('location', estado);
  };

  const handleCidadeSelect = (cidade) => {
    setSelectedCidade(cidade);
    handleInputChange('location', `${selectedEstado}, ${cidade}`);
  };

  return (
    <Modal transparent={true} visible={isOpen} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>{currentEventData.id ? 'Editar Evento' : 'Adicionar Novo Evento'}</Text>

            <Text style={styles.label}>Nome do Evento</Text>
            <TextInput
              style={styles.input}
              value={currentEventData.name}
              onChangeText={(text) => handleInputChange('name', text)}
              placeholder="Digite o nome do evento"
            />

            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.input}
              value={currentEventData.date}
              onChangeText={(text) => handleInputChange('date', text)}
              placeholder="Digite a data do evento"
              keyboardType="numeric"
            />

            <Text style={styles.label}>Estado</Text>
            {estados.map((estado, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.selectorItem,
                  selectedEstado === estado.nome && styles.selectorItemSelected,
                ]}
                onPress={() => handleEstadoSelect(estado.nome)}
              >
                <Text
                  style={[
                    styles.selectorText,
                    selectedEstado === estado.nome && styles.selectorTextSelected,
                  ]}
                >
                  {estado.nome}
                </Text>
              </TouchableOpacity>
            ))}

            {selectedEstado && (
              <>
                <Text style={styles.label}>Cidade</Text>
                {estados
                  .find((estado) => estado.nome === selectedEstado)
                  ?.cidades.map((cidade, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.selectorItem,
                        selectedCidade === cidade && styles.selectorItemSelected,
                      ]}
                      onPress={() => handleCidadeSelect(cidade)}
                    >
                      <Text
                        style={[
                          styles.selectorText,
                          selectedCidade === cidade && styles.selectorTextSelected,
                        ]}
                      >
                        {cidade}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </>
            )}

            <Text style={styles.label}>Imagem do Evento</Text>
            <TextInput
              style={styles.input}
              value={currentEventData.image}
              onChangeText={(text) => handleInputChange('image', text)}
              placeholder="Cole a URL da imagem"
            />
            {currentEventData.image && (
              <Image source={{ uri: currentEventData.image }} style={styles.imagePreview} />
            )}

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={onClose}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default EventModal;
