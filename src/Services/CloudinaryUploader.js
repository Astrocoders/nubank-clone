// Modules
import cryptojs from 'crypto-js';
import Meteor from 'react-native-meteor';
import _ from 'lodash';

 // Constants
import CONSTANTS from '../Services/Constants';

export default function CloudinaryUploader(uri, callback) {
  const timestamp = (Date.now() / 1000 | 0).toString();
  const hashString = 'timestamp=' + timestamp + CONSTANTS.CLOUDINARY_API_SECRET
  const signature = cryptojs.SHA1(hashString).toString();
  const uploadUrl = `https://api.cloudinary.com/v1_1/${CONSTANTS.CLOUDINARY_CLOUD}/image/upload`;
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  formData.append('file', {
    uri,
    type: 'image/jpg',
    name: `avatar-${Meteor.userId()}-${Math.floor(Math.random() * 10000)}.jpg`
  });
  formData.append('timestamp', timestamp);
  formData.append('api_key', CONSTANTS.CLOUDINARY_API_KEY);
  formData.append('signature', signature);

  xhr.open('POST', uploadUrl);
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (_.get(xhr, 'responseText.error')) {
      callback(xhr.responseText.error, null);
    }

    const cloudResponse = JSON.parse(_.get(xhr, 'responseText', {}));
    callback(null, cloudResponse.public_id);
  };
  xhr.onerror = (error) => {
    if (_.isFunction(callback)) {
      callback(error, null);
    }
  };

  xhr.send(formData);
}
