var playlist = {'The Cardigans':'Erase/Rewind'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( playlist, { [artistName] : songTitle} )
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
<<<<<<< HEAD
  return playlist
=======
  return playlist 
>>>>>>> 4a22d6a38b420372ae8e27ca9ba0e228fa0cf5fb
}
