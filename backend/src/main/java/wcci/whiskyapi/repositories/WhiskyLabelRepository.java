    
package wcci.whiskyapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import wcci.whiskyapi.entities.WhiskyLabel;

@Repository
public interface WhiskyLabelRepository extends CrudRepository<WhiskyLabel, Long>{

	WhiskyLabel findByLabelName(String LabelName);
}