import { useState, type FC } from 'react'
import { DragDropContext, Draggable, DraggingStyle, DropResult, Droppable, NotDraggingStyle } from 'react-beautiful-dnd'

import styles from './Home.module.scss'

const COLUMN_2 = 'COLUMN_2'
const COLUMN_1 = 'COLUMN_1'

const HomeContainer: FC = () => {
  const [list1, setList1] = useState([
    'Captain America',
    'Iron Man',
    'SpiderMan',
    'Thor',
    'Hulk',
    'Black Widow',
    'Loki',
    'Black Panther',
    'Deadpool',
    'Doctor Strange',
    'Ant Man',
    'Captain Marvel',
  ])

  const [list2, setList2] = useState([
    'BatMan',
    'SuperMan',
    'Wonder Woman',
    'Flash',
    'Green Lantern',
    'AquaMan',
    'Robin',
    'Cyborg',
    'StarFire',
    'HawkGirl',
    'Shazam',
  ])

  const deleteItem = (list: string[], index: number) => {
    return list.splice(index, 1).toString()
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === COLUMN_1) {
        const tempList = list1
        const removed = deleteItem(tempList, source.index)
        tempList.splice(destination.index, 0, removed)
        setList1(tempList)
      } else {
        const tempList = list2
        const removed = deleteItem(tempList, source.index)
        tempList.splice(destination.index, 0, removed)
        setList2(tempList)
      }
    } else {
      const tempList1 = list1
      const tempList2 = list2
      if (source.droppableId === COLUMN_2) {
        const removed = deleteItem(tempList2, source.index)
        tempList1.splice(destination.index, 0, removed)
        setList1(tempList1)
        setList2(tempList2)
      } else {
        const removed = deleteItem(tempList1, source.index)
        tempList2.splice(destination.index, 0, removed)
        setList1(tempList1)
        setList2(tempList2)
      }
    }
  }

  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? 'lightblue' : 'darkgrey',
    width: '100%',
  })

  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ): React.CSSProperties => ({
    background: isDragging ? 'darkgrey' : 'white',
    color: isDragging ? 'white' : 'black',
    ...draggableStyle,
  })

  return (
    <section className={styles.wrapper}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.wrapper__inner}>
          <h2 className={styles.wrapper__inner__title}>Hands on React Dnd example</h2>
          <div className={styles.wrapper__inner__lists}>
            <div className={styles.wrapper__inner__lists__elements}>
              <h3 className={styles.wrapper__inner__lists__elements__title}>Marvel Heros</h3>
              <Droppable droppableId={COLUMN_1}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    <ul>
                      {list1.map((element, index) => {
                        return (
                          <Draggable key={element} draggableId={`${element}${index}`} index={index}>
                            {(provided, snapshot) => (
                              <li
                                key={index}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                              >
                                {element}
                              </li>
                            )}
                          </Draggable>
                        )
                      })}
                    </ul>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className={styles.wrapper__inner__lists__elements}>
              <h3 className={styles.wrapper__inner__lists__elements__title}>DC Super Heros</h3>
              <Droppable droppableId={COLUMN_2}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    <ul>
                      {list2.map((element, index) => {
                        return (
                          <Draggable key={element} draggableId={`${element}${index}`} index={index}>
                            {(provided, snapshot) => (
                              <li
                                key={index}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                              >
                                {element}
                              </li>
                            )}
                          </Draggable>
                        )
                      })}
                    </ul>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>
    </section>
  )
}

export default HomeContainer
