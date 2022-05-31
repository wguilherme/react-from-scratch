import {RepositoryItem} from './RepositoryItem'

  const repository = {
    name: 'Forms in React',
    description: 'Forms in React',
    link: 'https://github.com/wguilherme'
  }

export function RepositoryList(){
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem 
        repository={repository}
        />
      </ul>
    </section>
  )
}