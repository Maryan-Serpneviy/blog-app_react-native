import React, { FC } from 'react'
import {
   StyleSheet,
   TouchableOpacity,
   View,
   Text,
   ImageBackground,
   Dimensions
} from 'react-native'

interface Props {
   post: IPost
   onOpen: (post: IPost) => void
}

export const Post: FC<Props> = ({ post, onOpen })  => (
   <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
         <ImageBackground source={{ uri: post.img }} style={styles.image}>
            <View style={styles.textWrap}>
               <Text style={styles.title}>
                  { new Date(post.date).toLocaleDateString() }
               </Text>
            </View>
         </ImageBackground>
      </View>
   </TouchableOpacity>
)

const styles = StyleSheet.create({
   post: {
      width: Dimensions.get('window').width,
      flexGrow: 1,
      marginBottom: 15,
      overflow: 'hidden'
   },
   image: {
      height: 200
   },
   textWrap: {
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
   },
   title: {
      color: 'white',
      fontFamily: 'caviar-dreams'
   }
})

export default Post