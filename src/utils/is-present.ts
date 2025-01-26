import isBlank from './is-blank'

/* Examples
  isPresent( '   ' )      => false
  isPresent( null )       => false
  isPresent( undefined )  => false
  isPresent( {} )         => false
  isPresent( [] )         => false
  isPresent( [''] )       => false
  isPresent( 0 )          => false
  isPresent( {k: 1} )     => true
  isPresent( '0' )        => true
  isPresent( ['1'] )    => true
  isPresent( new Date ) => true
*/

const isPresent = <T>(value: T): boolean => {
  return !isBlank(value)
}

export default isPresent
