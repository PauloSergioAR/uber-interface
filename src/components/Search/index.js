import React, { Component } from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default class Search extends Component {
  render() {
    return (
        <GooglePlacesAutocomplete
            placeholder="Pra onde?"
            placeholderTextColor="#333"
            onPress={() => {}}
            query={{
                key: 'AIzaSyBTub_rktbTHDeK9F0kagRwSagAyiJaIyI',
                language: 'pt'
            }}
            textInputProps={{
                autoCapitalize: "none",
                autoCorrect: false
            }}
            fetchDetails
            enablePoweredByContainer={false}
        />
    );
  }
}
