
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styled';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadedEvents = [
      { id: 1, name: 'Evento Corporativo', date: '2025-01-01', location: 'São Paulo', image: 'https://i.imgur.com/3IhLXZC.png' },
      { id: 2, name: '2025 Inovação', date: '2025-02-01', location: 'Rio de Janeiro', image: 'https://i.imgur.com/B7FWVs0.jpeg' },
    ];
    setEvents(loadedEvents);
  }, []);

  const handleEditEvent = (event) => {
    navigation.navigate('EventModal', { eventData: event });
  };

  const handleDeleteEvent = (id) => {
    Alert.alert(
      'Confirmar exclusão',
      'Você tem certeza que deseja excluir este evento?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => setEvents(events.filter((e) => e.id !== id)) },
      ],
      { cancelable: true }
    );
  };

  const renderEvent = ({ item }) => (
    <View style={styles.eventCard}>
      <Text style={styles.eventTitle}>{item.name}</Text>
      <Text style={styles.eventInfo}>Data: {item.date}</Text>
      <Text style={styles.eventInfo}>Local: {item.location}</Text>
      {item.image && <Image source={{ uri: item.image }} style={styles.imagePreview} />}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEditEvent(item)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteEvent(item.id)}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default EventList;
