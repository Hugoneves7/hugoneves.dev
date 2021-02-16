import getUser from '../../utils/getUser'

const apiGetUser = async (req, res) => {
  const data = await getUser('hugoneves7')
  res.send(data)
}

export default apiGetUser