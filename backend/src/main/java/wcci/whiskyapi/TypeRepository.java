package wcci.whiskyapi;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends CrudRepository <Type, Long> {
	
	Type findByName(String name);

}