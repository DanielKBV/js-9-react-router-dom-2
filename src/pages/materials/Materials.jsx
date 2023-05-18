import React from 'react'
import styled from '@emotion/styled'
import { Button } from '../../components/UI/Button'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Modal } from '../../components/UI/Modal'

const materialsData = [
  {
    id: '1',
    title: 'Material 1',
  },
  {
    id: '2',
    title: 'Material 2',
  },
]

export const Materials = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const openModal = () => {
    searchParams.set('modal', 'addNewMaterial')
    setSearchParams(searchParams)
  }

  const setOpenModal = () => {
    searchParams.delete('modal')
    setSearchParams(searchParams)
  }

  return (
    <>
      <Container>
        <ContainerButton>
          <Button onClick={openModal}>Add new material</Button>
        </ContainerButton>
        <ContainerMaterials>
          {materialsData.map((item) => (
            <BoxMaterials key={item.id}>
              <p>{item.title}</p>

              <NavLink to={`${item.id}/details`}>
                <Button>Details</Button>
              </NavLink>
            </BoxMaterials>
          ))}
        </ContainerMaterials>
      </Container>
      {searchParams.has('modal') && (
        <Modal onClick={setOpenModal}>
          <ContainerModal>
            <h1>Hello World</h1>
            <div>
              <Button onClick={setOpenModal}>CLose Modal</Button>
            </div>
          </ContainerModal>
        </Modal>
      )}
    </>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const ContainerButton = styled.div`
  margin-top: 140px;
  width: 94%;
  display: flex;
  justify-content: flex-end;
`

const ContainerMaterials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const BoxMaterials = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  font-size: 2rem;
  border-radius: 4px;
`

const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`
