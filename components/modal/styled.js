
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    maxHeight: height * 0.85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    height: 48,
  },
  selectorItem: {
    padding: 12,
    backgroundColor: '#eaeaea',
    borderRadius: 6,
    marginBottom: 8,
    alignItems: 'center',
  },
  selectorItemSelected: {
    backgroundColor: '#d6d6d6',
  },
  selectorText: {
    fontSize: 16,
    color: '#333',
  },
  selectorTextSelected: {
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'cover',
    backgroundColor: '#eaeaea',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#7F56D9',
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#D9534F',
  },
});