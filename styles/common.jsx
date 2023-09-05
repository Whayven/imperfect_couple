import {StyleSheet} from 'react-native';

export const basic = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // Black background
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color
  },
});

export const sidebar = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  sidebarButton: {
    paddingVertical: 10,
  },
  sidebarButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
});
