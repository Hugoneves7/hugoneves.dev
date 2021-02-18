import React from 'react'
import getUser from '../utils/getUser'
import { FiUsers } from 'react-icons/fi'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'

const Index = ({ repos, user }) => {
  //JSX
  return (
    <div className='container mx-auto bg-network'>
      <PageHead />
      <Hero />

      <div className='bg-purple-600 bg-opacity-5 rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16'>
        <h3 className='text-4xl text-center'>What I do</h3>
        <p className='text-2xl'>Fullstack Developer</p>
        <p className='text-2xl'>QA Analyst</p>
      </div>

      <div>
        <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
        <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-purple-600 bg-opacity-5 rounded-lg shadow-lg'>
          {[1, 2].map(i => (
            <div key={'education-' + i} className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
              <h4 className='text-lg uppercase font-bold mb-2'>Graduação</h4>
              <p className='text-2xl uppercase'>Gestor em Tecnologia da Informação<br />
                <span className='text-lg normal-case font-bold'>Pontifícia Universidade Católica de Campinas - PUC-Campinas</span></p>
              <h4>Técnico</h4>
              <p>Ténico em Informátca<br />
                <span>EEETEPA Francisco das Chagas de Azevedo (CACAU)</span></p>
            </div>
          ))}
        </div>
      </div>


      <div>
        <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10'>Tech Contributions</h3>
        <p className='text-center'>Github status: <RiGitRepositoryLine className='inline-block' /> {user.public_repos} | <GoGist className='inline-block' /> {user.public_gists} | <FiUsers className='inline-block' /> {user.followers}</p>
        <div className='md:grid md:grid-cols-3 md:gap-4 md:my-6'>
          {repos.map(repo => {
            return (
              <div key={repo.id} className='my-3 md:my-0 rounded bg-purple-600 bg-opacity-5 p-4 hover:shadow-md'>
                <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                <p>Language: {repo.language} / <GoStar className='inline-block' /> Stars: {repo.stargazers_count}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <p className='text-center my-8 py-4 border-t-2'>
          You can find the source-code of this website:
        <br />
          <a href=''>https://github.com/hugoneves7/hugoneves.dev</a>
        </p>
      </div>
    </div >
  )
}
export async function getServerSideProps(context) {
  const { repos, user } = await getUser('hugoneves7')
  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}
export default Index