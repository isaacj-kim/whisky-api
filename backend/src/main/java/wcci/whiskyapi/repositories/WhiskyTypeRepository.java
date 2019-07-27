package wcci.whiskyapi;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WhiskyTypeRepository extends CrudRepository <WhiskyType, Long> {
	
	WhiskyType findByName(String name);

}