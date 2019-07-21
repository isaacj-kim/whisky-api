package wcci.whiskyapi;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WhiskyLabelRepository extends CrudRepository<WhiskyLabel, Long>{

	WhiskyLabel findByLabelName(String LabelName);
}
