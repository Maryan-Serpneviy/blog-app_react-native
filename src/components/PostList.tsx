import React, { FC } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

/* components */
import Post from './Post'

/* styles */
import commonStyles from '../styles/common'

interface Props {
   posts: IPost[]
   onOpen: (post: IPost) => void
}

export const PostList: FC<Props> = ({ posts, onOpen }) => {
   return (
      <View style={[commonStyles.center, styles.container]}>
         <FlatList
            data={posts}
            keyExtractor={post => String(post.id)}
            renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 10
   }
})

export default PostList