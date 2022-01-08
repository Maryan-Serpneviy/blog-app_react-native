import React, { FC } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'

/* components */
import Post from './Post'

/* styles */
import commonStyles from '../styles/common'

interface Props {
   posts: IPost[]
   onOpen: (post: IPost) => void
}

export const PostList: FC<Props> = ({ posts, onOpen }) => (
   posts?.length ? (
      <View style={[commonStyles.center, styles.container]}>
         <FlatList
            data={posts}
            keyExtractor={post => String(post.id)}
            renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
         />
      </View>
   ) : (
      <View style={[styles.container, styles.noDataContainer]}>
         <Text style={styles.noData}>No posts yet</Text>
      </View>
   )
)

const styles = StyleSheet.create({
   container: {
      padding: 10
   },
   noDataContainer: {
      position: 'relative',
      top: '40%'
   },
   noData: {
      fontFamily: 'khand',
      textAlign: 'center',
      fontSize: 28
   }
})

export default PostList